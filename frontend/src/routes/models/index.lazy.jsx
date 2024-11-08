import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/models/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /models/!'
}
