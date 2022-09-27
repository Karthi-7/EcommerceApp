const categoryService=require('../../service/category.service');
const {Category}=require('../../models/index')

const allCategoriesData = [
    {
        id: 1,
        name: 'Electronics'
    },
    {
        id: 2,
        name: 'Groceries'
    },
];

const categoryPayload={
    name:"sports",
    description:"all sports items will be available"
}
    


test('when getAllCategories called all datas should be returned',async () => {
    const spy=jest.spyOn(Category,'findAll').mockReturnValue(allCategoriesData);
    const result=await categoryService.getAllCategories();
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allCategoriesData)
    
  });

test('when createAllCategoires called it should return a new category',async()=>{
    const spy=jest.spyOn(Category,'create').mockReturnValue(categoryPayload);
    const result=await categoryService.createAllCategories(categoryPayload);
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload)
})

test('when updateCategory called it should return a updated category',async()=>{
    const spy=jest.spyOn(Category,'update').mockReturnValue(categoryPayload);
    const result=await categoryService.updateCategory(1,categoryPayload);
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload)
})

test('when dellete category called it should delete the category',async()=>{
    const spy=jest.spyOn(Category,'destroy').mockReturnValue(categoryPayload);
    const result=await categoryService.deleteCategory(1)
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(categoryPayload)
})