import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styled} from 'nativewind';
import Section from '@Components/Section';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledSafeAreaView = styled(SafeAreaView);

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';

    return (
        <StyledSafeAreaView className={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
            />
            <StyledScrollView
                contentInsetAdjustmentBehavior="automatic"
                className={backgroundStyle}>
                <StyledView className={isDarkMode ? 'bg-black' : 'bg-white'}>
                    <Section title="Test">Test</Section>
                </StyledView>
            </StyledScrollView>
        </StyledSafeAreaView>
    );
};

export default App;
