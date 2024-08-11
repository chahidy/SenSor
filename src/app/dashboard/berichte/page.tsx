import ComplexTable from '@/app/lib/components/Tables/Table'
import { tableDataComplex } from '@/app/lib/components/Charts/variables'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function BerichtePage() {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <ComplexTable tableData={tableDataComplex} />
            <ComplexTable tableData={tableDataComplex} />
            <ComplexTable tableData={tableDataComplex} />
        </Box>
    )

}