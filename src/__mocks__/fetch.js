try {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        json: function() {
          return { data: [] };
        }
      });
    });
  });
} catch (err) {}
