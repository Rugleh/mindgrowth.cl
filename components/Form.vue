<template>
    <section id="form">
    <br>
    <br>
    <div class="container">
                <div class="row">
                <div class="col-md-6 col-xs-12">
                    <h2 class="display-2 text-center blue">¡Conversemos!</h2>
                    <br>
                    <p>Prestamos asistencia en los campos de planificación estratégica e ingeniería de procesos con el fin de ayudarlos con el cumplimiento de sus objetivos, buscando, además, aportar en el desarrollo de su curva de aprendizaje a modo de profesionalizar su negocio.</p>
                    <p><font-awesome-icon :icon="['fas', 'phone']"/> +569 67779168</p>
                    <p><font-awesome-icon :icon="['fas', 'envelope']"/> mindgrowthcl@gmail.com</p>

                </div>
                <div class="col-md-6 col-xs-12">
                    <form name="contact" method="POST" data-netlify="true">
                        <div class="form-row">
                            <div class="form-group col-md-4 col-xs-12">
                                <label for="inputName">Nombre</label>
                                <input type="text" class="form-control border-primary" name="nombre" id="inputName" placeholder="Juan Smith">
                            </div>
                            <div class="form-group col-md-4 col-xs-12">
                                <label for="inputEmail4">Correo</label>
                                <input type="email" class="form-control border-primary" name="correo"  id="inputEmail4" placeholder="Su dirección de correo">
                            </div>
                            <div class="form-group col-md-4 col-xs-12">
                                <label for="inputPhone">Telefono</label>
                                <input type="text" class="form-control border-primary" name="telefono" id="inputPhone" placeholder="+569 88989908">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12 col-xs-12">
                                <label for="exampleFormControlTextarea1">Comentario, cuéntanos sobre tu problemática</label>
                                <textarea class="form-control border-primary" name="comentario" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>

                        
                        
                        <button type="submit" class="btn btn-outline-primary diagnostico shadow">¡Enviar, quiero mi diagnostico!</button>
                    </form>
                </div>
            </div>

        </div>
        <br>
        <br>
    </section>
</template>

<script>
export default {
name: "Form"
}
</script>

<style>

</style>
