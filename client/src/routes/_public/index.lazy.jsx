import { createLazyFileRoute } from '@tanstack/react-router';
import Frame from '../../modules/layout/frame/Frame';

export const Route = createLazyFileRoute('/_public/')({
  component: Home,
});

function Home() {
  return (
    <Frame>
      <h1 className="text-3xl font-bold text-center mb-8">Insight</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <p className="text-lg mb-4">
            Bienvenido a <strong>Insight</strong>, una marca de profesionales que comparten una visión común de compromiso, integridad y colaboración. Nos destacamos por nuestro enfoque en la calidad, la claridad en las comunicaciones, y un profundo respeto por el esfuerzo y el trabajo de los demás. Solo aquellos que demuestren un alto nivel de integridad y compromiso pueden formar parte de nuestra comunidad.
          </p>
          <p className="text-lg mb-4">
            <strong>Diferenciación:</strong> Nos diferenciamos por ser un grupo selecto que no solo entiende, sino que supera las expectativas de nuestros clientes. A través de la cooperación, la transparencia y el uso eficiente de datos, ofrecemos soluciones que cumplen con lo pactado y añaden un valor real.
          </p>
          <p className="text-lg mb-4">
            Actualmente, estamos desarrollando la página, por lo que podrás explorar los portfolios y contribuciones individuales para conocer mejor el impacto de cada profesional.
          </p>
        </div>
        <div className="col-span-1">
          <img
            src="/logo.jpg"
            alt="Insight logo"
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-lg text-center mb-4 italic">
        <p>No se trata de hacerlo solo por gusto, sino de tomar un problema, pensar cómo darle una solución y luego mejorar esa solución para ofrecer el mejor servicio posible.</p>
      </div>
      <hr className="my-4" />
      <div className="text-lg">
        <p><strong>Compañero IT:</strong> El objetivo de <strong>Insight</strong> es representar a los mejores profesionales. No mediremos solo el conocimiento, sino tu capacidad como profesional para seguir aprendiendo, colaborar y crecer en este rubro.</p>
      </div>
    </Frame>
  );
}

export default Home;