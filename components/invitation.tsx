"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, Moon, Star, Stars } from "lucide-react"

// Mock database of invited guests
const INVITED_GUESTS = [
  "Kafilat Aloba",
  "Alexandra Kiss",
  "Erhabor Blessing",
  "Rick Machungo",
  "Chiwara Tonderai Asher",
  "Nathani Aarya",
  "Gannah Soliman",
  "Udeagbala Amarachi Doris",
  "Au Bao Ngoc",
  "Diana Vasileva",
  "Sunil Sona",
  "Ten Jia Wan",
]

export function Invitation() {
  const [name, setName] = useState("")
  const [stage, setStage] = useState<"input" | "checking" | "result">("input")
  const [isInvited, setIsInvited] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsAnimating(true)

    // Start animation sequence
    setTimeout(() => {
      setStage("checking")

      // Simulate checking process
      setTimeout(() => {
        const invited = INVITED_GUESTS.some((guest) => guest.toLowerCase() === name.trim().toLowerCase())
        setIsInvited(invited)
        setStage("result")
        setIsAnimating(false)
      }, 3000)
    }, 1500)
  }

  const resetForm = () => {
    setName("")
    setStage("input")
    setIsInvited(false)
  }

  return (
    <AnimatePresence mode="wait">
      {stage === "input" && (
        <motion.div
          key="input"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-indigo-500/30 bg-black/40 backdrop-blur-xl text-white shadow-xl">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-2">
                <Moon className="h-10 w-10 text-indigo-400" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight">Iftar Invitation</CardTitle>
              <CardDescription className="text-indigo-300">
                Enter your name to retrieve your invitation status
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 pb-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-indigo-950/50 border-indigo-700/50 text-white placeholder:text-indigo-300/70"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
                  disabled={isAnimating || !name.trim()}
                >
                  {isAnimating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Retrieve Invitation"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      )}

      {stage === "checking" && (
        <motion.div
          key="checking"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-indigo-500/30 bg-black/40 backdrop-blur-xl text-white shadow-xl">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="relative">
                <Loader2 className="h-16 w-16 animate-spin text-indigo-400" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Star className="h-8 w-8 text-purple-400" />
                </motion.div>
              </div>
              <h3 className="mt-6 text-xl font-medium">Checking invitation status...</h3>
              <p className="mt-2 text-indigo-300 text-center">Please wait while we verify your invitation</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {stage === "result" && (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card
            className={`border-2 ${isInvited ? "border-emerald-500/30" : "border-rose-500/30"} bg-black/40 backdrop-blur-xl text-white shadow-xl`}
          >
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-2">
                {isInvited ? (
                  <CheckCircle className="h-12 w-12 text-emerald-400" />
                ) : (
                  <Stars className="h-12 w-12 text-rose-400" />
                )}
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight">
                {isInvited ? "Congratulations!" : "We're Sorry"}
              </CardTitle>
              <CardDescription className={isInvited ? "text-emerald-300" : "text-rose-300"}>
                {isInvited
                  ? "You are invited to Kafilat's Iftar party"
                  : "We couldn't find your name on the guest list"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              {isInvited && (
                <motion.div
                  className="rounded-lg bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-4 border border-indigo-500/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-medium text-lg mb-2">Event Details:</h4>
                  <ul className="space-y-2 text-indigo-100">
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Date:</span> Saturday, March 22, 2025
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Time:</span> 6:00 PM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Venue:</span> 4027 Nyar utca 21 🔔12
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-semibold">Note:</span> Please Arrive On Time 🫵
                    </li>
                  </ul>
                </motion.div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                onClick={resetForm}
                className={`w-full ${
                  isInvited
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                } text-white`}
              >
                {isInvited ? "View Details" : "Try Again"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

