import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/projects')({
  component: () => <div>Hello /_private/projects!</div>
})