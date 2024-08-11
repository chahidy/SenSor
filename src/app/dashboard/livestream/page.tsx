import { AspectRatio, Image } from "@chakra-ui/react";

export default function LivestreamPage() {
    return (
        <AspectRatio maxW='400px' ratio={4 / 3}>
            {/* <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
            /> */}
            <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
        </AspectRatio>)
}