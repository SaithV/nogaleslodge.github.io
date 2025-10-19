import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'

export function Toaster() {
  return (
    <ToastPrimitives.Provider swipeDirection="right">
      <ToastViewport />
    </ToastPrimitives.Provider>
  )
}

export function Toast({ title, description }: { title?: string; description?: string }) {
  return (
    <ToastPrimitives.Root className={cn('bg-card shadow-soft border rounded-xl p-4')}> 
      {title && <ToastPrimitives.Title className="font-medium">{title}</ToastPrimitives.Title>}
      {description && (
        <ToastPrimitives.Description className="text-sm text-muted-foreground mt-1">
          {description}
        </ToastPrimitives.Description>
      )}
    </ToastPrimitives.Root>
  )
}

function ToastViewport() {
  return (
    <ToastPrimitives.Viewport className="fixed top-2 right-2 z-[100] flex max-h-screen w-96 flex-col gap-2" />
  )
}
