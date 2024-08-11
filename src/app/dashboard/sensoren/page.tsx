import { Card } from "@/app/lib/components"
import prisma from "@/app/lib/utils/prisma"
import { Grid } from "@chakra-ui/react"


export default async function SensorenPage() {
    const data = await prisma.data.findFirst()
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
        </Grid>)
}