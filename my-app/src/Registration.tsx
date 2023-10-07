import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Получаем объект навигации из React Router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // Регистрация прошла успешно, перенаправляем на /hub
        navigate('/hub');
      } else {
        // Обработка ошибки регистрации
        console.error('Ошибка регистрации');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <TextField
          label="Имя пользователя"
          name="username"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          value={formData.username}
          required
        />
        <TextField
          label="Пароль"
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: '16px' }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationPage;
