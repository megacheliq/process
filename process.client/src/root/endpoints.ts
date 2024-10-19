import axiosClient from "./axios-client";
import { Account, CreateAccountDto, CreateGroupDto, Group, UpdateAccountDto, UpdateGroupDto } from "./types";

export const getAllGroups = async (): Promise<Group[]> => {
    try {
        const response = await axiosClient.get('Account/GetAllGroups');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllAccounts = async (): Promise<Account[]> => {
    try {
        const response = await axiosClient.get('Account/GetAllAccounts');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAccount = async (accountId: string): Promise<Account | null> => {
    try {
        const response = await axiosClient.get(`Account/GetAccount/${accountId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getGroup = async (groupId: string): Promise<Group | null> => {
    try {
        const response = await axiosClient.get(`Account/GetGroup/${groupId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const addAccount = async (dto: CreateAccountDto): Promise<void> => {
    try {
        await axiosClient.post('Account/AddAccount', dto);
    } catch (error) {
        console.error(error);
    }
}

export const addGroup = async (dto: CreateGroupDto): Promise<void> => {
    try {
        await axiosClient.post('Account/AddGroup', dto);
    } catch (error) {
        console.error(error);
    }
}

export const updateAccount = async (dto: UpdateAccountDto, accountId: number): Promise<void> => {
    try {
        await axiosClient.put(`Account/UpdateAccount/${accountId}`, dto);
    } catch (error) {
        console.error(error);
    }
}

export const updateGroup = async (dto: UpdateGroupDto, groupId: number): Promise<void> => {
    try {
        await axiosClient.put(`Account/UpdateGroup/${groupId}`, dto);
    } catch (error) {
        console.error(error);
    }
}

export const deleteAccount = async (accountId: number): Promise<void> => {
    try {
        await axiosClient.delete(`Account/DeleteAccount/${accountId}`)
    } catch (error) {
        console.error(error);
    }
}

export const deleteGroup = async (groupId: number): Promise<void> => {
    try {
        await axiosClient.delete(`Account/DeleteGroup/${groupId}`)
    } catch (error) {
        console.error(error);
    }
}