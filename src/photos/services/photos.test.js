import { fetchPhotos } from "./photos";

describe("photos.services.Services", () => {
  const data = {
    title: "Cat",
    images: {
      preview_gif: {
        url: "some url",
        width: 200,
        height: 200
      },
      original: {
        url: "some url",
        width: 300,
        height: 200
      }
    }
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json: function() {
            return { data: [data] };
          }
        });
      });
    });
  });

  it("fetch all from an external service", async () => {
    const response = await fetchPhotos();

    expect(response).toEqual([
      {
        thumb: {
          url: data.images.preview_gif.url,
          width: data.images.preview_gif.width,
          height: data.images.preview_gif.height
        },
        image: {
          url: data.images.original.url,
          width: data.images.original.width,
          height: data.images.original.height
        },
        title: data.title
      }
    ]);
  });
});
