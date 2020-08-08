create or replace function notDelPro()
    returns trigger
    language 'plpgsql'
    as $$
        begin
            raise warning 'No se puede eliminar procedimiento';
            rollback;
        end;
$$;


create trigger procedimientoDel before delete on procedimiento
    execute procedure notDelPro();
	
	
	
	
create or replace function notDelEPQ()
    returns trigger
    language 'plpgsql'
    as $$
        begin
            raise warning 'No se puede eliminar procedimiento';
            rollback;
        end;
$$;


create trigger EquipoDel before delete on Equipo_medico
    execute procedure notDelEPQ();
	
