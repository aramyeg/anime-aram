import * as Types from  './recommendations.types';

export const unpackRecommendations = (response: Types.IServerResponseRecommendations): Array<Types.IUIResponseRecommendation> => (
  response.data.map(program => unpackRecommendation(program))
);

export const unpackRecommendation = (response: Types.IServerResponseRecommendation): Types.IUIResponseRecommendation => ({
  imageURL: response.entry.images.jpg.image_url,
  title: response.entry.title,
});

