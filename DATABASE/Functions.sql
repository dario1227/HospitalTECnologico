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
