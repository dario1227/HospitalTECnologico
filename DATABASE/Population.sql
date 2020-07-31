INSERT INTO PACIENTE(Cedula,Nombre,Apellido,Telefono,Nacimiento,Medico,Direccion)
VALUES
('117855996','Paco','Ramirez','55856696','12-07-1960','778855256','sanjose centro'),
('119345996','Pancho','Castillo','58916696','02-12-2000','679258256','Heredia'),
('369655996','Daniela','Gonzales','77965965','12-07-1990','778855256','Alajuela'),
('996685225','Marco','JImenez','96965854','09-07-2008','778855256','por la pulperia esquinera'),
('177458855','Pablo','Sandoval','71582496','02-06-1990','778855256','sanjose centro'),
('996636713','Jonathan','Camacho','79641352','27-02-1996','778855256','detras dek banco nacional'),
('312287465','Petra','Obando','93682159','31-03-1978','778855256','por el pequeño mundo de san pedro');

INSERT INTO SALON(Piso,Capacidad,Nombre,Medicina)
VALUES
(1,100,'Emergencias','Niños'),
(2,150,'Emergencias1','Niños'),
(3,100,'Emergencias2','Mujeres'),
(3,100,'Accidentes','Hombres'),
(1,100,'Partos','Mujeres');
(2,100,'Suturar','niños');



INSERT INTO EQUIPO_MEDICO(Nombre,Proveedor,CantDisponible)
VALUES
('luces quirúrgicas','Hospitalfeliz',2),
('ultrasonidos','Hospitalfeliz',2),
('esterilizadores','HospitalRTV',4),
('desfibriladores','HospitalQUIx',12),
('monitores','farmacialinda',5),
('monitores','farmacialinda',5),
('respiradores artificiales','farmacialinda',5),
('electrocardiógrafo','HospitalRTV',4);

 INSERT INTO PROCEDIMIENTO(Nombre,Recuperacion)
 VALUES
 ('Apendicectomía',10),
 ('Biopsia de mama',200),
 ('Cirugía de cataratas',100),
 ('Cesárea, Histerectomía',10),
 ('Cirugía para la lumbalgia',10),
 ('Mastectomía',10),
 ('Amigdalectomía',10);
 

 INSERT INTO CAMA(Uci,salon,equipoMedico)
 VALUES
 ('si','SL1','EQ4'),
 ('no','SL2','EQ4'), 
 ('si','SL3','EQ5'), 
 ('no','SL3','EQ6');
 
 INSERT INTO RESERVACION(Procedimiento,FechaIngreso,FechaSalida,Paciente,Cama)
 VALUES
 ('PD12','12-10-2020','20-10-2020','369655996','CM20'),
 ('PD13','6-12-2020','20-12-2020','996636713','CM19'),
 ('PD14','10-10-2020','20-11-2020','177458855','CM22'),
 ('PD15','21-10-2020','08-12-2020','312287465','CM21');
 
INSERT INTO PERSONAL(Cedula,Nombre,Apellido,Telefono,Direccion,FechaINgreso,Nacimiento,Cargo)
VALUES
('778855256','Diana','Molina','88978969','Sanjose','12-05-2005','10-03-1988','Administracion'),
('679258256','Felipe','Guitierrez','88585889','cartago','12-08-2010','12-03-2000','Doctor'),
('789456123','Laura','Monge','93964865','Sanjose','12-08-2000','17-03-1968','Enfermero'),
('123456789','Florencio','Rodriguez','93859615','Sanjose','05-08-1996','10-08-1999','Doctor'),
('588585858','Mauricio','Alpizar','56969636','heredia','03-09-1990','18-03-1978','Enfermero');

INSERT INTO HISTORIAL_CLINICO(Procedimiento,Paciente,FechaRealizado,Tratamiento,Patologia)
VALUES
('PD12','996685225','18-09-2020','acetaminofen','dolor cabeza'),
('PD13','996685225','10-09-2020','acetaminofen','cansado'),
('PD16','996685225','12-05-2020','acetaminofen','fatiga'),
('PD14','996685225','19-10-2020','acetaminofen','dolor');


