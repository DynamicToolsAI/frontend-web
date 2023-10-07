import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface AiModel {
  id: number;
  name: string;
  description: string;
}

const HubPage: React.FC = () => {
  const [aiModels, setAiModels] = useState<AiModel[]>([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к вашей базе данных для получения списка AI моделей
    // Замените этот фейковый код на реальный запрос к вашей базе данных
    const fakeAiModelsData: AiModel[] = [
      {
        id: 1,
        name: 'AI Модель 1',
        description: 'Описание AI Модели 1',
      },
      {
        id: 2,
        name: 'AI Модель 2',
        description: 'Описание AI Модели 2',
      },
      {
        id: 3,
        name: 'AI Модель 3',
        description: 'Описание AI Модели 3',
      },
      // Добавьте другие AI модели сюда
    ];

    setAiModels(fakeAiModelsData);
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Доступные AI Модели
      </Typography>
      <Grid container spacing={3}>
        {aiModels.map((model) => (
          <Grid item key={model.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{model.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {model.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Подробнее
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HubPage;
