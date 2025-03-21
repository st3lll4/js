namespace Base.DAL.Contracts;
using Base.Domain;

public interface IRepository<TEntity> 
where TEntity : BaseEntity
    {
        IEnumerable<TEntity> All();

        TEntity Find(params object[] id);
        Task<TEntity> FindAsync(params object[] id);

        void Add(TEntity entity);
        Task AddAsync(TEntity entity);

        TEntity Update(TEntity entity);

        void Remove(TEntity entity);

        void Remove(params object[] id);
    }
    
