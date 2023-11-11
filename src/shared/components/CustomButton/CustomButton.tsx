import { FC, PropsWithChildren } from 'react'
import { CustomButtonContainer } from './styledComponents'

interface CustomButtonProps {
  secondary?: boolean
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  secondary,
}) => (
  <CustomButtonContainer $secondary={secondary}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton
