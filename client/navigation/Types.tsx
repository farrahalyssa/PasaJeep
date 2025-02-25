// user 
export interface User{
    id: string;
    fullName: string;
    email: string;
    password: string;
    role: UserRole;
}

export type UserRole = 'driver' | 'commuter'


//navigation
export type AuthStackParamList = {
    Intro: undefined;
    // Login: Pick<User, 'id' | 'fullName' | 'email' | 'password' | 'role'>;
    Login: undefined;
    Register: undefined;
    DriverRegistration: undefined;
    RoleSelection: undefined;
}

export type MainTabParamList = {
    //commuter
    HomeCommuter: undefined; //but this should have user's location 
    ProfileCommuter: Pick<User, 'id' | 'fullName' | 'email' | 'password' | 'role'>;

} 