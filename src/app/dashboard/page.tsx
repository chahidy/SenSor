import { Grid } from '@chakra-ui/react'

import { Card } from '@/app/lib/components'
import prisma from '@/app/lib/utils/prisma'
export default async function DashBoardPage() {
    const data = await prisma.data.findFirst()
    return (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)', "2xl": 'repeat(4, 1fr)' }} gap={6}>
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
            <Card name={data?.id} temp={data?.airTemperature.value} time={data?.dataSource} />
        </Grid>)
}