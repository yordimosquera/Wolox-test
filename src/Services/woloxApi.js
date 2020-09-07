export const services = {
  getTechs: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/techs`, {
        method: 'GET'
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
};
