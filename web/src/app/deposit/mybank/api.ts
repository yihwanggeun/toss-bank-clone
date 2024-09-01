interface Account {
  id: number;
  user_id: number;
  account_number: string;
  balance: number;
  account_type: string;
  created_at: string;
}
  

export const fetchUserAccounts = async (userId: number): Promise<Account[]> => {
    const response = await fetch(`http://localhost:3001/accounts/user/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch accounts');
    }
    return response.json();
  };