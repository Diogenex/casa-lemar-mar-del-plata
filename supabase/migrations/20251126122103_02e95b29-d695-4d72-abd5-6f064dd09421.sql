-- Fix security warning: Set search_path for ensure_single_calendar_config function
CREATE OR REPLACE FUNCTION public.ensure_single_calendar_config()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM public.calendar_config) > 1 THEN
    RAISE EXCEPTION 'Only one calendar configuration is allowed';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;