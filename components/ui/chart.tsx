import * as React from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

import { cn } from "@/lib/utils"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
  type?: "line" | "bar" | "pie"
  xDataKey?: string
  yDataKey?: string
  height?: number
  colors?: string[]
}

export function Chart({
  data,
  type = "line",
  xDataKey = "name",
  yDataKey = "value",
  height = 300,
  colors = ["#3182F6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        {type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xDataKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={yDataKey}
              stroke={colors[0]}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        ) : type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xDataKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={yDataKey} fill={colors[0]} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey={yDataKey}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}