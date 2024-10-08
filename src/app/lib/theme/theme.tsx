import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { CardComponent } from './additions/card/card';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';

export default extendTheme(
    { breakpoints }, // Breakpoints
    globalStyles,
    CardComponent // card component
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps { }