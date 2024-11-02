'use client'
const DeleteButton = ({ id }) => {

    const deleteEmployees = async () => {
        let data = await fetch(`http://localhost:3000/api/employee/${id}`,
            {
                method: "DELETED"
            }
        )
        data = await data.json();
        if (data.success) {
            alert('Employee Deleted')
        }
        else{
            alert('failed')
        }
    }
// console.log(id);

return (
    <>
        <button>Delete</button>
    </>
)
}

export default DeleteButton
