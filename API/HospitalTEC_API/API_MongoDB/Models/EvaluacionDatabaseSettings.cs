namespace API_MongoDB.Models
{
    public class EvaluacionDatabaseSettings : IEvaluacionDatabaseSettings
    {
        public string calificacionCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IEvaluacionDatabaseSettings
    {
        string calificacionCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}