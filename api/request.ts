interface GetProps {
  url: string;
  model: new <Type>(data: unknown) => Type;
  mapper: (data: unknown)=> unknown;
}

export const getRequest = async <Type>({url, model, mapper}: GetProps) : Promise<Type> => {
  try{
    const response = await fetch(url.toString(), {method: 'GET'});
    const data = await response.json();
    return (new model(mapper(data)));
  } catch (err){
    throw new Error(err)
  }

}