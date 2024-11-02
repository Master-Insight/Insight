import { createFileRoute, useRouter } from '@tanstack/react-router'
import { getContributions, postContributions, updateContribution, deleteContribution  } from '../../apis/contributions.services';
import { getLanguajes, getProfessions, getFrameworks, getAppLinks } from '../../apis/values.services';
import { useEffect, useState } from 'react';
import Frame from '../../modules/layout/frame/Frame';
import SectionWFilters from '../../modules/layout/frame/Section.Filter';
import Card from '../../modules/contributions/Card';
import { useAppStore } from '../../store/useAppStore';
import { BiBookmark, BiClipboard, BiCodeBlock, BiCode, BiBriefcase } from 'react-icons/bi';
import { z } from 'zod';
import { zodSearchValidator } from '@tanstack/router-zod-adapter'
import { alertBasic } from '../../modules/alerts/alerts';
import { getShortAssociates } from '../../apis/users.services';

// Validador de params query
const titleSearchSchema = z.object({
  title: z.string().optional(),
})

// Ruta de Tanstack Rute
export const Route = createFileRoute('/_private/contributions')({
  loader: async () => {
    return getContributions()
  },
  validateSearch: zodSearchValidator(titleSearchSchema),
  component: ContributionsPage,
})

// Funcion que define el componente
function ContributionsPage () {
  const { title } = Route.useSearch()

  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [error, setError] = useState(false);

  const [contributions, setContributions] = useState(Route.useLoaderData());
  const [languages, setLanguages] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [apps, setApps] = useState([]);
  const [filterusers, setFilterUsers] = useState({});
  const { currentUser } = useAppStore();

  // console.log(filterusers);
  
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  
  useEffect(() => {
    const fetchContributions = async () => {
      setIsLoading(true);
      try {
        const updatedContributions = await getContributions();
        setContributions(updatedContributions);
      } catch (err) {
        setError("Hubo un error al cargar las contribuciones");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchContributions();
  }, [refresh]);

  // Cargar lenguajes y profesiones
  // http://localhost:5173/contributions?title=ActionModal%20-%20TanstackForm
  useEffect(() => {
    const fetchFilters = async () => {
      setIsFilterLoading(true);
      try {
        const [languagesResp, professionsResp, frameworksResp, appsResp, usersResp] = await Promise.all([getLanguajes(), getProfessions(), getFrameworks(), getAppLinks(), getShortAssociates()]);
        setLanguages(languagesResp);
        setProfessions(professionsResp);
        setFrameworks(Object.values(frameworksResp).flat());
        setApps(appsResp);
        const orderUser = usersResp.sort((a, b) => a.full_name.localeCompare(b.full_name)).map(user => ({ value: user._id, label: user.full_name }))
        setFilterUsers(orderUser)
        
      } catch (err) {
        console.log(err);
        setError('Hubo un error al cargar los select');
      } finally {
        setIsFilterLoading(false);
      }
    };
    fetchFilters();
  }, []);

  const config = {
    filters: [
      { key: "user", label: "Usuario", type: "select", object: "label", options: filterusers, function: (value)=>{return value+"a"} }, //filterusers options: ["a", "b"]
      { key: "title", label: "Título", type: "text" },
      { key: "professions", label: "Profesiones", type: "select", options: professions },
      { key: "languages", label: "Lenguaje", type: "select", options: languages },
      { key: "frameworks", label: "FrameWorks", type: "select", options: frameworks },
    ],
    activeFilter: { title },
    fields: [
      { name: "title",
        label: "Titulo",
        icon:BiBookmark,
        type: "text",
        validation: z.string().min(5, "El titulo debe tener al menos 5 caracteres"),
        default: "Aquí va un titulo",
      },
      { name: "description",
        label: "Descripción",
        icon: BiClipboard,
        type: "textarea",
        validation: z.string().min(5, "La descripción debe tener al menos 5 caracteres",),
        default: "Contar que hace",
      },
      { name: "code", 
        label: "Codigo", 
        icon: BiCodeBlock, 
        type: "textarea" 
      },
      { name: "example", 
        label: "Ejemplo", 
        icon: BiCodeBlock, 
        type: "textarea" 
      },
      { name: "contributedBy", 
        label: "Id Usuario", 
        type: "text", 
        noEditable: true , 
        default: "66e74c2a0ff43936ac565d5d"
      },
      { name: "professions", 
        label: "Profesión", 
        icon: BiBriefcase, 
        type: "array",
        itemType: "select",
        enum: professions,
        default: ["Backend"], 
      },
      { name: "languages", 
        label: "Lenguaje", icon: BiCode, 
        type: "array",
        itemType: "select",
        enum: languages,
        default: ["JavaScript"], 
      },
      { name: "frameworks", 
        label: "Frameworks", 
        icon: BiCode, 
        type: "array",
        itemType: "select",
        enum: frameworks ,
        default: [], 
      },
      { name: "libraries", 
        label: "Librerias", 
        icon: BiBookmark, 
        type: "array",
        itemType: "text",
        default: [],
      },
      { name: "links", 
        label: "Links", 
        type: 'array',
        itemType: 'fields', 
        fields: [  // Campos dentro de cada objeto del array
        {
          name: "appName",
          label: "Plataforma",
          type: "select",
          itemType: "text",
          enum: apps,
          validation: z.enum(apps)
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          validation: z.string().url("Debe ser una URL válida")
        }],
        default: [],
      }
    ],
    card: Card,
    currentUserId: currentUser._id,
    actions: {
      postApi: async function (value) {
        console.log(value);
        setIsLoading(true);
        try {
          await postContributions(value)
          alertBasic("Éxito", "Contribución creada con éxito", "success");
        } catch (err) {
          console.log(err);
          alertBasic("Error", err, "error")
        } finally {
          setIsLoading(false);
          setRefresh(!refresh);
        }
      },
      putApi: async function (id, value) {
        setIsLoading(true);
        try {
          await updateContribution(id, value)
          alertBasic("Éxito", "Contribución actualizada con éxito", "success");
        } catch (err) {
          console.log(err);
          alertBasic("Error", err, "error")
        } finally {
          setIsLoading(false);
          setRefresh(!refresh);
        }
      },
      delApi: async function (id) {
        setIsLoading(true);
        try {
          await deleteContribution(id)
          alertBasic("Éxito", "Contribución eliminada con éxito", "success");
        } catch (err) {
          console.log(err);
          alertBasic("Error", err, "error")
        } finally {
          setIsLoading(false);
          setRefresh(!refresh);
        }
      }
    }
  }

  if (isLoading) { return <div className="text-center text-gray-500">Cargando...</div>; }
  if (error) { return <div className="text-center text-gray-500">Error: {error}</div>; }

  return (
    <>
      <Frame css={'w-full mx-5'}>
        <SectionWFilters
          title={"Contribuciones"}
          data={contributions}

          isFilterPending={isFilterLoading}

          config= {config}
        />
      </Frame>
    </>
  );
}
