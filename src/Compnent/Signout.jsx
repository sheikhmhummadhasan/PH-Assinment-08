'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'

const Signout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await authClient.signOut({
      
      fetchOptions: {
        onSuccess: () => {
          router.push('/login')
        },
      },
    })
    router.push('/')
  }

  return (
    <Button onClick={handleLogout} variant="secondary">
      Sign out
    </Button>

  )
}

export default Signout