
import userLenaMock from './mocks/user-lena.mock.json';
import portfolioLenaMock from './mocks/portfolio-lena.mock.json';


export const fetchUser = async () => {

  const token = localStorage.getItem('token');

  //just use a mock for now 
  if (process.env.REACT_APP_MOCK_API==='true'){
    return userLenaMock ; 
  }
  
  /*
  // you should adapt this based on your authentication system and your api endpoint contract 
  // It could be great to encapsulate all the fetch calls of the app to handle console errors display (with payload for example) or logger, based on environnement 
  // also create a config urls file 
  const res = await fetch(
    "https://" + process.env.REACT_API_HOST + '/users', 
    {
      method: 'GET',
      headers:{         
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    );
  return res.json();
*/
};

export const fetchPortfolio = async (userId) => {

  const token = localStorage.getItem('token');

  //just use a mock for now 
  if (process.env.REACT_APP_MOCK_API==='true'){
    return portfolioLenaMock ; 
  }
  /*
  // you should adapt this based on your authentication system and your api endpoint contract 
  // It could be great to encapsulate all the fetch calls of the app to handle console errors display (with payload for example) or logger, based on environnement 
  // also create a config urls file 
  const res = await fetch(
    "https://" + process.env.REACT_API_HOST + "/portfolios", 
    {
      method: 'GET',
      headers:{         
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    );
  return res.json();
  */
};

