import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/register')({
  component: () => <div>Hello /_public/register!</div>
})