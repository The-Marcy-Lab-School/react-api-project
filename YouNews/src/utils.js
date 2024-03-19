export const handleFetch = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const { ok, status, statusText, headers } = response;
      console.log('response:', { ok, status, statusText, headers });
      if (!ok) throw new Error(`Fetch failed with status - ${status}, ${statusText}`);
  
      const isJson = (headers.get('content-type') || '').includes('application/json');
      const responseData = await (isJson ? response.json() : response.text());
  
      return [responseData, null];
    } catch (error) {
      console.warn(error)
      return [null, error];
    }
  };