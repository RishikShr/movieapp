export type item = {
	id:number | string
    avatar:string
    first_name:string
    last_name:string
};

 interface storeType {
	items: item[];
}

export default storeType;