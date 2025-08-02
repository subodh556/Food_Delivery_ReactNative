import React from 'react'
import { Redirect, Slot } from 'expo-router'
import useAuthStore from '@/store/auth.store';

export default function Tablayout() {

  const { isAuthenticated } = useAuthStore();

  if(!isAuthenticated) return <Redirect href="/sign-in" />

  return (
    <Slot />
  )
}