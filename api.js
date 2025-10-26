// API client para conectar com o backend Node.js
const API_BASE_URL = 'http://localhost:3001/api';

class BotAPI {
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer upload do arquivo');
    }

    return response.json();
  }

  async createBot(botData) {
    const response = await fetch(`${API_BASE_URL}/bots`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(botData)
    });

    if (!response.ok) {
      throw new Error('Erro ao criar bot');
    }

    return response.json();
  }

  async getBots() {
    const response = await fetch(`${API_BASE_URL}/bots`);
    if (!response.ok) {
      throw new Error('Erro ao buscar bots');
    }
    return response.json();
  }

  async getBot(id) {
    const response = await fetch(`${API_BASE_URL}/bots/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar bot');
    }
    return response.json();
  }

  async updateBot(id, data) {
    const response = await fetch(`${API_BASE_URL}/bots/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar bot');
    }

    return response.json();
  }

  async deleteBot(id) {
    const response = await fetch(`${API_BASE_URL}/bots/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar bot');
    }

    return response.json();
  }

  async startBot(id) {
    const response = await fetch(`${API_BASE_URL}/bots/${id}/start`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error('Erro ao iniciar bot');
    }

    return response.json();
  }

  async stopBot(id) {
    const response = await fetch(`${API_BASE_URL}/bots/${id}/stop`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error('Erro ao parar bot');
    }

    return response.json();
  }
}

export const botAPI = new BotAPI();