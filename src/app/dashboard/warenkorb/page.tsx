import Product from "@/app/lib/components/Product";
import { Grid } from "@chakra-ui/react";

export default function WarenkorbPage() {
    return (
        <Grid templateColumns='repeat(4, 1fr)'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </Grid>
    )
}