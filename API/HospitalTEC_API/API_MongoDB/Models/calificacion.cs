using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace API_MongoDB.Models
{
    public class calificacion
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string cedula { get; set; }
        public int higiene { get; set; }
        public int puntualidad { get; set; }
        public int trato { get; set; }

        
    }
}