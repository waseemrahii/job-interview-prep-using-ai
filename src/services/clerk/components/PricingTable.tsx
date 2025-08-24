// import { PricingTable as ClerkPricingTable } from "@clerk/nextjs"

// export function PricingTable() {
//   return <ClerkPricingTable newSubscriptionRedirectUrl="/app" />
// }

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with job preparation",
    features: ["5 AI interview sessions per month", "Basic resume analysis", "50 practice questions", "Email support"],
    popular: false,
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    description: "Everything you need to land your dream job",
    features: [
      "Unlimited AI interview sessions",
      "Advanced resume optimization",
      "1000+ practice questions",
      "Real-time feedback & analytics",
      "Priority support",
      "Custom interview scenarios",
    ],
    popular: true,
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
]

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <Card key={plan.name} className={`relative ${plan.popular ? "border-emerald-500 shadow-lg scale-105" : ""}`}>
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 hover:bg-emerald-600">
              Most Popular
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">/{plan.period}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={plan.buttonVariant} className="w-full" size="lg">
              {plan.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
