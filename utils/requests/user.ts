export interface UserType {
  name: string;
  type: string;
}

// TODO fake api
export const User = {
  getUser: async (dni: string) => {
    return new Promise<UserType>((resolve, _reject) =>
      setTimeout(
        () =>
          resolve({
            name: 'Luis Alfonso Berrospi Rodriguez',
            type: 'Inmortal top 1400 DOTA 2 - AED BEST TA 2021',
          }),
        2000,
      ),
    );
  },
};
