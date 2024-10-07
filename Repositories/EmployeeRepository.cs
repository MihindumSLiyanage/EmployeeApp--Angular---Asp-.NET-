using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _dbContext;

        public EmployeeRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {
            employee.Status = Status.Active;
            await _dbContext.Employees.AddAsync(employee);
            await _dbContext.SaveChangesAsync();
            return employee;
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            var employee = await _dbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return false;
            }

            employee.Status = Status.Deleted;
            _dbContext.Employees.Update(employee);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _dbContext.Employees.Where(e => e.Status != Status.Deleted).ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            var employee = await _dbContext.Employees.FirstOrDefaultAsync(e => e.EmployeeId == id && e.Status != Status.Deleted);

            if (employee == null)
            {
                return null;
            }
            return employee;
        }


        public async Task<bool> UpdateEmployee(Employee employee)
        {
            var existingEmployee = await _dbContext.Employees.FindAsync(employee.EmployeeId);
            if (existingEmployee == null)
            {
                return false;
            }

            existingEmployee.Name = employee.Name;
            existingEmployee.Email = employee.Email;
            existingEmployee.Department = employee.Department;

            _dbContext.Employees.Update(existingEmployee);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}