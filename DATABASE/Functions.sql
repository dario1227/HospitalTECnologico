CREATE FUNCTION ORDENHistorial() RETURNS
TABLE(historialid varchar, procedimiento varchar, paciente varchar, fecharealizado date, tratamiento varchar, patologia varchar) 
LANGUAGE sql
AS $$
SELECT * from Historial_CLINICO
order by fecharealizado;
$$ ;

CREATE FUNCTION CantDisponible() RETURNS bigint
LANGUAGE sql
AS $$
SELECT COUNT(*) from cama
$$ ;

CREATE FUNCTION getPaciente(pac varchar) returns TABLE(
	Cedula VARCHAR,
	Nombre VARCHAR,
	Apellido VARCHAR,
	Telefono VARCHAR,
	Nacimiento DATE,
	Medico VARCHAR,
	Direccion VARCHAR,
	Tratamientos VARCHAR,
	Patologias VARCHAR)
LANGUAGE sql
AS $$
SELECT * from paciente where cedula=pac
$$ ;

CREATE FUNCTION getReservacion(pac varchar) returns TABLE(
	ReservacionID VARCHAR,
	Procedimiento VARCHAR,
	FechaIngreso DATE,
	FechaSalida DATE,
	Paciente VARCHAR,
	Cama VARCHAR
)
LANGUAGE sql
AS $$
SELECT * from reservacion where paciente=pac
$$ ;

CREATE FUNCTION getHistorial(pac varchar) returns TABLE(
	HistorialID  VARCHAR ,
	Procedimiento VARCHAR,
	Paciente VARCHAR ,
	FechaRealizado DATE,
	Tratamiento VARCHAR ,
	Patologia VARCHAR

)
LANGUAGE sql
AS $$
SELECT * from historial_clinico where paciente=pac
$$ ;

