CREATE SEQUENCE number;
CREATE TABLE PACIENTE(
	Cedula VARCHAR(9),
	Nombre VARCHAR,
	Apellido VARCHAR,
	Telefono VARCHAR,
	Nacimiento DATE,
	Medico VARCHAR(9),
	Direccion VARCHAR,
	Reservacion VARCHAR,
	PRIMARY KEY(Cedula)
);
CREATE TABLE CAMA(
	CamaID VARCHAR PRIMARY KEY CHECK (CamaID ~ '^CM[0-9]+$' ) DEFAULT 'CM'  || nextval('number'),
	Uci VARCHAR,
	Salon VARCHAR,
	EquipoMedico VARCHAR
);
CREATE TABLE SALON(
	SalonID VARCHAR PRIMARY KEY CHECK (SalonID ~ '^SL[0-9]+$' ) DEFAULT 'SL'  || nextval('number'),
	Piso INT,
	Capacidad INT,
	Nombre VARCHAR,
	Medicina VARCHAR
);
CREATE TABLE EQUIPO_MEDICO(
	EquipoID VARCHAR PRIMARY KEY CHECK (EquipoID ~ '^EQ[0-9]+$' ) DEFAULT 'EQ'  || nextval('number'),
	Nombre VARCHAR,
	Proveedor VARCHAR,
	CantDisponible INT
);
CREATE TABLE RESERVACION(
	ReservacionID VARCHAR PRIMARY KEY CHECK (ReservacionID ~ '^RV[0-9]+$' ) DEFAULT 'RV'  || nextval('number'),
	Procedimiento VARCHAR,
	FechaIngreso DATE,
	FechaSalida DATE,
	Paciente VARCHAR(9),
	Cama VARCHAR
);
CREATE TABLE PERSONAL(
	Cedula VARCHAR(9),
	Nombre VARCHAR,
	Apellido VARCHAR,
	Telefono VARCHAR,
	Direccion VARCHAR,
	FechaIngreso DATE,
	Nacimiento DATE,
	Cargo VARCHAR,
	PRIMARY KEY(Cedula)
);
CREATE TABLE HISTORIAL_CLINICO(
	HistorialID  VARCHAR PRIMARY KEY CHECK (HistorialID ~ '^HC[0-9]+$' ) DEFAULT 'HC'  || nextval('number'),
	Procedimiento VARCHAR,
	Paciente VARCHAR (9),
	FechaRealizado DATE,
	Tratamiento VARCHAR ,
	Patologia VARCHAR

);
CREATE TABLE PROCEDIMIENTO(
	ProcedimientoID VARCHAR PRIMARY KEY CHECK (ProcedimientoID ~ '^PD[0-9]+$' ) DEFAULT 'PD'  || nextval('number'),
	Nombre VARCHAR,
	Recuperacion INT

);