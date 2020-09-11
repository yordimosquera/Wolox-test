export const services = {
  getTechs: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/techs`, {
        method: 'GET'
      });
      return response.json();
    } catch (error) {
      return error;
    }
  },
  getTechByKeyword: (techs = [], keywords = '') => {
    const wordToSearch = keywords.toLowerCase();
    return techs.filter(
      tech => tech.tech.toLowerCase().indexOf(wordToSearch) >= 0
    );
  },
  login: async ({ email, password }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        body: {
          email,
          password
        }
      });

      return response.json();
    } catch (error) {
      return error;
    }
  }
};
