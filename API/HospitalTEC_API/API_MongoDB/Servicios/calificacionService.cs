using API_MongoDB.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace API_MongoDB.Servicios
{
    public class calificacionService
    {
        private readonly IMongoCollection<calificacion> _books;

        public calificacionService(IEvaluacionDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _books = database.GetCollection<calificacion>(settings.calificacionCollectionName);
        }

        public List<calificacion> Get() =>
            _books.Find(book => true).ToList();

        public calificacion Get(string id) =>
            _books.Find<calificacion>(book => book._id == id).FirstOrDefault();

        public calificacion Create(calificacion book)
        {
            _books.InsertOne(book);
            return book;
        }

        public void Update(string id, calificacion bookIn) =>
            _books.ReplaceOne(book => book._id == id, bookIn);

        public void Remove(calificacion bookIn) =>
            _books.DeleteOne(book => book._id == bookIn._id);

        public void Remove(string id) => 
            _books.DeleteOne(book => book._id == id);
    }
}