// utils/api.js

export const updateUserProfile = async (userData) => {
    console.log("at api page",userData)
    try {
      const response = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            website: userData.website,
            mobile: userData.mobile,
            description: userData.description
        })
      });
      console.log(response)
      return await response.json();
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false };
    }
  };
  
  export const updateUserPassword = async (email,passwordData) => {
    console.log("this is ",email,passwordData)
    const data = {
        email: email,
        password: passwordData
    }
    try {
      const response = await fetch('/api/updateUser/updatePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error updating password:', error);
      return { success: false };
    }
  };
  