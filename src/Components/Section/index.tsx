import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({children, title}: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <StyledView className="mt-8 p-10">
      <StyledText
        className={`text-2xl font-semibold  ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
        {title}
      </StyledText>
      <StyledText
        className={`mt-2 text-lg font-normal ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
        {children}
      </StyledText>
    </StyledView>
  );
};

export default Section;
