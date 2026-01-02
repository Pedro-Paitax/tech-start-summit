"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Tudo o que você precisa saber antes de participar do Tech Start Summit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Para quem é o Tech Start Summit?
              </AccordionTrigger>
              <AccordionContent>
                O evento é voltado para calouros, estudantes e pessoas que estão
                dando os primeiros passos na área de tecnologia. Não é necessário
                conhecimento prévio avançado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Onde posso ver a programação completa?
              </AccordionTrigger>
              <AccordionContent>
                Toda a programação oficial — palestras, horários e atividades —
                está disponível exclusivamente no nosso aplicativo. É por lá que
                você monta sua agenda e acompanha o evento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Preciso baixar o app para participar?
              </AccordionTrigger>
              <AccordionContent>
                Não. O aplicativo é interamente WEB, 
                sem precisar baixar nada, assim você fica livre de aplicativos
                 e com acesso mais fácil no dia do evento!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Onde o evento acontece?
              </AccordionTrigger>
              <AccordionContent>
                O Tech Start Summit acontece presencialmente. Informações sobre
                local, acesso e orientações serão comunicadas pelo site e pelo app.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
