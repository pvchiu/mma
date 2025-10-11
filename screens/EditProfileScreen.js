    import React, { useLayoutEffect } from 'react';
    import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
    import { Formik } from 'formik';
    import * as Yup from 'yup';
    import { useTheme } from '../contexts/ThemeContext';

    const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is required'),
    bio: Yup.string()
        .max(150, 'Bio is too long')
        .required('Bio is required'),
    });

    export default function EditProfileScreen({ route, navigation }) {
    const { user } = route.params;
    const { theme } = useTheme();

    // ✅ Khi ở màn hình EditProfile, sửa lại hành vi của nút Back
    useLayoutEffect(() => {
        navigation.setOptions({
        headerLeft: () => (
            <Button
            title="->"
            
            onPress={() => navigation.navigate('Home')} // về Home thay vì Profile
            />
        ),
        });
    }, [navigation, theme]);

    const handleUpdate = (values) => {
    // Sau khi lưu, reset stack để Profile nằm sau Home
    navigation.reset({
        index: 1,
        routes: [
        { name: 'Home' },
        { name: 'Profile', params: { updatedUser: values } },
        ],
    });
    };


    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Formik
            initialValues={{ name: user.name, bio: user.bio }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
                <Text style={[styles.label, { color: theme.text }]}>Name</Text>
                <TextInput
                style={[styles.input, { color: theme.text, borderColor: theme.border }]}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholderTextColor={theme.border}
                />
                {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
                )}

                <Text style={[styles.label, { color: theme.text }]}>Bio</Text>
                <TextInput
                style={[
                    styles.input,
                    { color: theme.text, borderColor: theme.border, height: 100 },
                ]}
                onChangeText={handleChange('bio')}
                onBlur={handleBlur('bio')}
                value={values.bio}
                multiline
                placeholderTextColor={theme.border}
                />
                {touched.bio && errors.bio && (
                <Text style={styles.errorText}>{errors.bio}</Text>
                )}

                <Button onPress={handleSubmit} title="Save Changes" color={theme.primary} />
            </View>
            )}
        </Formik>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    form: { gap: 15 },
    label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    input: { borderWidth: 1, padding: 10, borderRadius: 5, fontSize: 16 },
    errorText: { color: 'red', fontSize: 12 },
    });
