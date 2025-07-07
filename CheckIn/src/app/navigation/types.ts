export type RootStackParamList = {
  Home: undefined; // Exemplo de tela inicial
  Details: { itemId: string; otherParam?: string }; // Exemplo de tela com parâmetros
  Profile: { userId: string }; // Exemplo de outra tela
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
