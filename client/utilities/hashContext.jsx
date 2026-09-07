"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

const HashContext = createContext()

export function HashProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [hash, setHashState] = useState("")

  useEffect(() => {
    const sync = () => setHashState(window.location.hash.slice(1))
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  const setHash = (newHash) => {
    router.push(`${pathname}${"#" + newHash}`, { scroll: false })    
    setHashState(newHash)
  }

  return (
    <HashContext.Provider value={{ hash, setHash }}>
      {children}
    </HashContext.Provider>
  )
}

export function useHash() {
  const context = useContext(HashContext)
  if (!context) throw new Error("useHash must be used within a HashProvider")
  return context
}
